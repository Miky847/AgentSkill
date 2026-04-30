// scripts/main.js
export const tools = {
  web_search: async ({ keywords }) => {
    const API_KEY = "YOUR_API_KEY_HERE"; // Thay bằng key của bạn
    const response = await fetch(`https://api.search.brave.com/res/v1/web/search?q=${encodeURIComponent(keywords)}`, {
      headers: { "X-Subscription-Token": API_KEY }
    });
    
    const data = await response.json();
    
    // Chỉ lấy tiêu đề và đoạn trích dẫn để tiết kiệm Context Window của Gemma
    return data.web.results.map(res => ({
      title: res.title,
      snippet: res.description,
      url: res.url
    })).slice(0, 5); // Lấy 5 kết quả đầu tiên
  }
};
