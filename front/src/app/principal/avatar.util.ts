export class AvatarUtil {
    public static avatares: any[] = [
        {value: 1, url: '../../assets/Ezreal.png'},
        {value: 2, url: '../../assets/Jinx.png'},
        {value: 3, url: '../../assets/Lux.png'},
        {value: 4, url: '../../assets/Miss_Fortuness.png'},
        {value: 5, url: '../../assets/Pyke.png'},
        {value: 6, url: '../../assets/Sylas.png'}
    ]
    
    obterAvatares(){
        return AvatarUtil.avatares;
      }
}
