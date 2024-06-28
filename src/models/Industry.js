class Industry{
    constructor(id,industry_name_en,industry_name_ja,industry_order,created_at,updated_at){
        this.id=id;
        this.industry_name_en=industry_name_en;
        this.industry_name_ja=industry_name_ja;
        this.industry_order=industry_order;
        this.created_at=created_at;
        this.updated_at=updated_at;
    }
    fromJson(json){
        let jsonObj= JSON.parse(json)        
        this.id=jsonObj.hasOwnProperty("id")? jsonObj['id']: 0,
        this.industry_name_en=jsonObj.hasOwnProperty("industry_name_en")? jsonObj['industry_name_en']: "",
        this.industry_name_ja=jsonObj.hasOwnProperty("industry_name_ja")? jsonObj['industry_name_ja']: "",
        this.industry_order=jsonObj.hasOwnProperty("industry_order")? jsonObj['industry_order']: 0,
        this.created_at=jsonObj.hasOwnProperty("created_at")? jsonObj['created_at']:"",
        this.updated_at=jsonObj.hasOwnProperty("updated_at")? jsonObj['updated_at']:""        
    }
}

// let tmp=new Industry()
// tmp.fromJson('{"id": 27,"industry_name_en": "Consumer Electronics","industry_name_ja": null,"industry_order": 26,"created_at": "2024-06-23T09:43:10.000000Z","updated_at": "2024-06-23T09:43:10.000000Z"}')