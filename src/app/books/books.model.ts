export class Book {
    public kind: string;
    public id: string;
    public etag: string;
    public selfLink: string;
    public volumeInfo: {
      title: string,
      subtitle: string,
      authors: string[],
      publisher: string,
      publishedDate: string,
      description: string,
      industryIdentifiers: [{
        type: string,
        identifier: string
      }],
      readingModes: {
        text: boolean,
        images: boolean
      },
      pageCount: number,
      printType: string,
      categories: string[],
      maturityRating: string,
      allowAnonLogging: boolean,
      contentVersion: string,
      imageLinks: {
        smallThumbnail: string,
        thumbnail: string
      },
      language: string,
      previewLink: string,
      infoLink: string,
      canonicalVolumeLink: string
    };
    public saleInfo: {
      country: string,
      saleability: string,
      isEbook: boolean
    };
    public accessInfo: {
      country: string,
      viewability: string,
      embeddable: boolean,
      publicDomain: boolean,
      textToSpeechPermission: string,
      epub: {
        isAvailable: boolean
      },
      pdf: {
        isAvailable: boolean
      },
      webReaderLink: string,
      accessViewStatus: string,
      quoteSharingAllowed: boolean
    };
    public searchInfo: {
      textSnippet: string
    };

  constructor(
    kind: string,
    id: string,
    etag: string,
    selfLink: string,
    volumeInfo: any,
    saleInfo: any,
    accessInfo: any,
    searchInfo: any) {
      this.kind = kind;
      this.id = id;
      this.etag = etag;
      this.selfLink = selfLink;
      this.volumeInfo = volumeInfo;
      this.saleInfo = saleInfo;
      this.accessInfo = accessInfo;
      this.searchInfo = searchInfo;
  }
}

export class FetchedBooksApi {
  public kind: string;
  public items: Book[];
  public totalItems: number;

  constructor(kind: string, items: Book[], totalItems: number) {
    this.kind = kind;
    this.items = items;
    this.totalItems = totalItems;
  }
}
