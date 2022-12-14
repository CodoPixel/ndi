import "../styles/globals.scss";

// FontAwesome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import "@sweetalert2/theme-borderless/borderless.min.css";
config.autoAddCss = false

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <head />
            <body>
                {children}
            </body>
        </html>
    )
}
