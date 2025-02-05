// app/components/GoodreadsWidget.tsx
'use client'

import { useEffect } from 'react';
import '@/styles/goodreads.css'; 

export default function GoodreadsWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://www.goodreads.com/review/custom_widget/179379620.CJ%27s%20bookshelf:%20to-read?cover_position=left&cover_size=small&num_books=3&order=a&shelf=to-read&show_author=1&show_cover=1&show_rating=0&show_review=0&show_tags=1&show_title=1&sort=date_added&widget_bg_color=FFFFFF&widget_bg_transparent=&widget_border_width=1&widget_id=1738202988&widget_text_color=000000&widget_title_size=medium&widget_width=medium';
    script.async = true;
    script.charset = 'utf-8';
    
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="gr_custom_widget_1738202988">
      <div className="gr_custom_container_1738202988">
        <h2 className="gr_custom_header_1738202988">
          <a
            style={{ textDecoration: 'none', color: 'inherit' }}
            rel="nofollow"
            href="https://www.goodreads.com/review/list/179379620-cj-shantz?shelf=to-read&utm_medium=api&utm_source=custom_widget"
          >
            Recently Read
          </a>
        </h2>
        <div className="gr_custom_each_container_1738202988">
          {/* Placeholder content while the script loads */}
          <p className="text-gray-500">Loading books...</p>
        </div>
      </div>
    </div>
  );
}