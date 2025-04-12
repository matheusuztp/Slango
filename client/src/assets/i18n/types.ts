export interface Translation {
    app: {
      title: string;
      description: string;
      subtitle: string;
    };
    translator: {
      inputPlaceholder: string;
      translateButton: string;
      suggestedSlangs: string;
    };
    slangs: {
      slang: string;
      meaning: string;
      region: string;
    }[];
    common: {
      loading: string;
      error: string;
      tryAgain: string;
    };
  }