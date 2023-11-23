import Head from 'next/head';
import React from 'react';

const Script = () => {
    return (
        <Head>
            <script src="./public/assets/js/vendor/modernizr-3.6.0.min.js"></script>
            <script src="./public/assets/js/vendor/jquery-3.6.0.min.js"></script>
            <script src="./public/assets/js/vendor/jquery-migrate-3.3.0.min.js"></script>
            <script src="./public/assets/js/vendor/bootstrap.bundle.min.js"></script>
            <script src="./public/assets/js/plugins/waypoints.js"></script>
            {/* <script src="./public/assets/js/plugins/magnific-popup.js"></script> */}
            <script src="./public/assets/js/plugins/perfect-scrollbar.min.js"></script>
            <script src="./public/assets/js/plugins/select2.min.js"></script>
            <script src="./public/assets/js/plugins/swiper-bundle.min.js"></script>
            <script src="./public/assets/js/plugins/jquery.circliful.js"></script>
            <script src="./public/assets/js/main.js?v=4.1"></script>
        </Head>
    );
}

export default Script;
