import {Fragment} from "react";

const GoogleAnalytics = () => {
    return (
        <Fragment>

            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-229686292-1"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date());

                gtag('config', 'UA-229686292-1');
            </script>
        </Fragment>
    );
};

export default GoogleAnalytics;