import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="ru">
            <Head>
                {/* Вставляем код Яндекс.Метрики */}
                <script
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
                ></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}