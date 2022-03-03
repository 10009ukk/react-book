import axios from "axios";

const TTBKey = "ttbgoodaksejr0956001"


export function getBook() {
    const url = `https://cors-anywhere.herokuapp.com/http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbgoodaksejr0956001&QueryType=Bestseller&MaxResults=25&start=1&SearchTarget=Book&Cover=Big&output=js&Version=20131101`
    return axios.get(url).then(({data}) => {
        console.log(data.item);
        return data.item;
    });
}