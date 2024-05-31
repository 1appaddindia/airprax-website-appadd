export function convertProductNameToTitle(productName) {
    // Decode the URL-encoded string
    let decodedName = decodeURIComponent(productName);

    // Replace encoded characters with the intended characters
    let title = decodedName.replace(/%E2%80%A6/g, '…').replace(/%E2%80%93/g, '–');

    return title;
}