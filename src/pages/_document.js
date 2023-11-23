// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;800&display=swap"
          rel="stylesheet"
        />
        <script src="/assets/js/vendor/modernizr-3.6.0.min.js" />
        <script src="/assets/js/vendor/jquery-3.6.0.min.js" />
        <script src="/assets/js/vendor/jquery-migrate-3.3.0.min.js" />
        <script src="/assets/js/vendor/bootstrap.bundle.min.js" />
        <script src="/assets/js/plugins/waypoints.js" />
        <script src="/assets/js/plugins/magnific-popup.js" />
        <script src="/assets/js/plugins/perfect-scrollbar.min.js" />
        <script src="/assets/js/plugins/select2.min.js" />
        <script src="/assets/js/plugins/swiper-bundle.min.js" />
        <script src="/assets/js/plugins/jquery.circliful.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
