export function splitString(inputString: string):string{
    return inputString.split("_").join(" ");
}

export function concatString(inputString1:string,inputString2:string):string{
    return inputString1+inputString2;
}

export function checkYear(year:number):boolean{
    return ((year%4===0 && year%100!==0) || year%400===0);
}

export function secretHandshake(num:number):string[]{
    const binary=num.toString(2).padStart(5, '0');
    const decrypt:string[]=[];
    for (let i=0;i<binary.length; i++) {
        if (binary[i]==='1') {
            switch (i) {
                case 0:
                    decrypt.reverse();
                    break;
                case 1:
                    decrypt.push('jump');
                    break;
                case 2:
                    decrypt.push('close your eyes');
                    break;
                case 3:
                    decrypt.push('double blink');
                    break;
                case 4:
                    decrypt.push('wink');
                    break;
            }
        }
    }
    return decrypt;

}