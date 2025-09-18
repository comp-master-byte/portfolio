import localFont from 'next/font/local'
import "./styles/globals.css";

const roboto = localFont({
  src: [
    {
      path: './fonts/Roboto-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Roboto-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Roboto-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Roboto-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body> 
        {children}
      </body>
    </html>
  );
}
