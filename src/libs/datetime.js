export function DbTimeForHuman(str){
    return str.replace('T', ' ').substring(0, 16)
}