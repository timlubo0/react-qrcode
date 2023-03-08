import { Button } from '@chakra-ui/react';
import { QRCode } from 'react-qrcode-logo';

interface Props{
    imageUri: string;
    link: string;
}

const QrCodeLogo = ({ imageUri, link }: Props) => {

    const downloadCode = () => {
        const canvas: any = document.getElementById("sameId_as_QRCode_compoent_id");
        if(canvas) {
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl
        downloadLink.download = 'errr.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        }
    }

    return (
        <>
            <QRCode
                value={link}
                size={250}        
                qrStyle="squares"    
                eyeRadius={10}    
                id={"sameId_as_QRCode_compoent_id"}
                logoImage={imageUri}
                logoPadding={10}
            />
            <Button onClick={() => downloadCode()}>
                Download Code
            </Button>
        </>
    )
}

export default QrCodeLogo;