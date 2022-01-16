const Generator = require('./generator')
const initial = async () => {
    var _thisIndex = 1;
    const _maxSupply = 100;
    while(_thisIndex <= _maxSupply) {
        try{
            console.log('Generating NFT '+_thisIndex);
            await Generator.build(_thisIndex, () => {
                _thisIndex++;
            })
        }catch(e){
            console.error('Error while generating NFT '+_thisIndex)
            console.log(e);
            _thisIndex = _maxSupply + 1;
        }
    }
}
initial();