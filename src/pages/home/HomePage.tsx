import React from 'react';
import { Card, CardHeader, CardBody, Text, Center, Heading, Input, Button, IconButton } from '@chakra-ui/react';
import ReactImagePickerEditor, { ImagePickerConf } from 'react-image-picker-editor';
import 'react-image-picker-editor/dist/index.css';
import { HomeState } from './Types';
import QrCodeLogo from './components/QrCodeLogo';
import { SearchIcon } from '@chakra-ui/icons';
import Icon from '@mdi/react';
import { mdiAccount, mdiGithub, mdiInstagram } from '@mdi/js';

class HomePage extends React.Component<{}, HomeState>{

    public state: Readonly<HomeState>;

    constructor(props: {}){
        super(props);

        this.state = {
            imageUri: '',
            link: ''
        }
    }

    render(): React.ReactNode {

        const {imageUri, link } = this.state;

        return(
            <>
                <Center>
                    <Card width='50%'>
                        <CardHeader>
                            <Center><Heading>QR Code Generator</Heading></Center>
                        </CardHeader>
                        <CardBody>
                            <Center>
                                <Text marginBottom={5}>Generate a qr code for your website in one click. Even more, add a logo.</Text>
                            </Center>
                            <Center>
                                <Input onChange={(event) => this.setState({ link: event.target.value })} placeholder='Your Website Link...' marginBottom={5} />
                            </Center>

                            <Center>
                                <Text>Logo</Text>
                                < ReactImagePickerEditor
                                    config={config2}
                                    imageSrcProp={initialImage}
                                    imageChanged={(newDataUri: string) => this.setState({ imageUri: newDataUri })} />

                            </Center>
                            <Center>
                                <Button w="full" marginTop={5}>Generate QR Code</Button>
                            </Center>
                        </CardBody>
                    </Card>
                    <Card>
                        <QrCodeLogo link={link} imageUri={imageUri} />
                    </Card>
                    
                </Center>
                <>
                    <Center><Text marginTop={10}>Developed By <span style={{ color: 'blue' }}>Tim Lubo</span></Text></Center>
                    <Center>
                        <a href='https://github.com/timlubo0/' target="_blank" rel='noreferrer'>
                            <Icon path={mdiGithub}
                                title="Github"
                                size={1}
                            />
                        </a>
                        <a href='https://www.instagram.com/timlubo/' target="_blank" rel='noreferrer'>
                            <Icon path={mdiInstagram}
                                title="Instagram"
                                size={1}
                            />
                        </a>
                    </Center>
                </>
            </>
        )
    }
}

const config2: ImagePickerConf = {
    borderRadius: '8px',
    language: 'en',
    width: '130px',
    height: '80px',
    objectFit: 'contain',
    compressInitial: null,
};

const initialImage = '';

export default HomePage;