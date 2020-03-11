// This module will get docs for an application from https://globaldossier.uspto.gov/.

import axios, { AxiosInstance } from 'axios';

import {
  IDossierApplication,
  IDossierApplicationPreview,
  IDossierDoc,
  IDossierResult,
} from '../interface/application';
import * as logger from '../utils/logger';

const BASE_URL = 'https://globaldossier.uspto.gov/';

export class DossierAgent {
  private cookie: string = '';
  private searchUrl: string = '';

  private agent: AxiosInstance = axios.create({
    timeout: 10000, // 10s
    baseURL: BASE_URL,
    headers: {
      Accept: 'application/json, text/plain, */*',
      cookie: '',
    },
  });

  public async downloadDossierDocsData(applId: string): Promise<IDossierApplication | null> {
    logger.info('[DossierAgent] Download Dossier docs.');
    try {
      const searchUrl = `svc/application/US/${applId}`;
      this.searchUrl = BASE_URL + searchUrl;
      logger.info(`Searching ${applId} from ${this.searchUrl}.`);
      let searchResult = await this.agent.get<IDossierResult>(searchUrl);
      let searchResponse = searchResult.data;

      // Set cookies.
      for (let cookie of searchResult.headers['set-cookie']) {
        const cookieParts = cookie.split(' ');
        this.agent.defaults.headers.cookie += cookieParts[0] + ' ';
      }
      this.cookie = this.agent.defaults.headers.cookie;

      if (searchResponse && searchResponse.list) {
        let preview: IDossierApplicationPreview | null = null;
        for (let applPreview of searchResponse.list) {
          if (applPreview.appNum === applId) {
            preview = applPreview;
            break;
          }
        }
        if (!preview) {
          logger.warn(`Dossier application with ${applId} is not found in the result list.`);
          return null;
        }

        const previewUrl = `svc/doclist/${preview.countryCode}/${preview.appNum}/${preview.kindCode}`;
        logger.info(`Getting ${applId} dossier from ${previewUrl}.`);
        let applResult = await this.agent.get<IDossierApplication>(previewUrl);
        let applResponse = applResult.data;
        if (applResponse) {
          return applResponse;
        } else {
          logger.warn(`Doc list for ${applId} is not found.`);
          return null;
        }
      } else {
        logger.warn(`Dossier search ${applId} got empty result.`);
        return null;
      }
    } catch (err) {
      logger.warn('[DossierAgent] Failed to download dossier application: ' + err.message);
      return null;
    }
  }

  // https://globaldossier.uspto.gov/svc/doccontent/US/201715473454.A/1-1-US%20%20154734540RP1%20/1/PDF
  public getDocPDFUrl(appl: IDossierApplication, doc: IDossierDoc): string {
    let docUrl = `${BASE_URL}svc/doccontent/${appl.country}/${appl.docNumber}/${encodeURIComponent(
      doc.docId,
    )}/${doc.numberOfPages}/${doc.docFormat}`;

    return docUrl;
  }

  public getCookie(): string {
    return this.cookie;
  }

  public getSearchUrl(): string {
    return this.searchUrl;
  }
}
