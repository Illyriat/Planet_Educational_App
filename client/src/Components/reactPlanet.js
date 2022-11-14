import { Planet } from 'react-planet';

export function MyPlanet() {

    return (
        <Planet centerContent={
    
                      
                    <div
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: '50%',
                            backgroundColor: '#516BEB',
                        }}
                    />
                }
                // open
                // autoClose
           >
                <div
                    style={{
                        height: 70,
                        width: 70,
                        borderRadius: '50%',
                        backgroundColor: '#84DFFF',
                    }}
                />
                <div
                    style={{
                        height: 70,
                        width: 70,
                        borderRadius: '50%',
                        backgroundColor: '#84DFFF',
                    }}
                />
            </Planet>
    );
}

export default MyPlanet;