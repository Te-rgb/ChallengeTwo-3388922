class SearchSuggestionSystem {
  constructor(products) {
    // Sort the product list lexicographically for easier suggestions
    this.products = products.sort();
  }

  getSuggestions(searchWord) {
    const result = [];
    let prefix = "";

    for (let i = 0; i < searchWord.length; i++) {
      prefix += searchWord[i];
      const suggestions = [];

      for (let product of this.products) {
        if (product.startsWith(prefix)) {
          suggestions.push(product);
          if (suggestions.length === 3) break; // Max 3 suggestions
        }
      }

      result.push(suggestions);
    }

    return result;
  }
}
