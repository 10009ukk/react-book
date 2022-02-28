import axios from "axios";

const TTBKey = "ttbgoodaksejr0956001"


export function getBook(isbn) {
    const url = `https://cors-anywhere.herokuapp.com/http://www.aladin.co.kr/ttb/api/ItemLookUp.aspx?ttbkey=$ttbgoodaksejr0956001&itemIdType=ISBN&ItemId=${isbn}&output=xml&Version=20131101&OptResult=ebookList,usedList,reviewList`;
    return axios.get(url).then(({data}) => {
        console.log(data.item);
        return data.item;
    });
}