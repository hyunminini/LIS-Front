import JsBarcode from "jsbarcode";

const Barcode = (barcode)=> {
    console.log('바코드 생성');
    console.log(barcode);
        const canvas = document.createElement('canvas');
        canvas.type = ''
        JsBarcode(canvas, barcode, {height: 50, displayValue:false})
    return canvas.toDataURL('text');
}

export default Barcode


// const BarcodeItemScreen = () => {
//     const [imageUrl, setImageUrl] = useState<string>()
//
//     useEffect(() => {
//         const canvas = document.createElement('canvas')
//         JsBarcode(canvas, barcodeNumber, { height: 50, displayValue: false })
//         setImageUrl(canvas.toDataURL('image/png'))
//     }, [])
//
//     return <div>{imageUrl && <img src={imageUrl} />}</div>
// }
