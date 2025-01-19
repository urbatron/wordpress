import Script from 'next/script';

function MyApp({ Component, pageProps }) {
    return (
        <>
            {/* Добавляем код Яндекс.Метрики */}
            <Script
                id="yandex-metrika"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){
                        (m[i].a=m[i].a||[]).push(arguments)};
                        m[i].l=1*new Date();
                        k=e.createElement(t),a=e.getElementsByTagName(t)[0];
                        k.async=1;k.src=r;a.parentNode.insertBefore(k,a)})
                        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                        ym(49707889, "init", {
                            clickmap:true,
                            trackLinks:true,
                            accurateTrackBounce:true
                        });
                    `,
                }}
            />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;