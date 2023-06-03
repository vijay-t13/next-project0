export const metadata = {
    title: 'DataList - from server',
    description: 'Data listed fetched',
};



export default async function dataListLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                {children}
                <footer>Data List from server</footer>
            </body>
        </html>
    );
}
