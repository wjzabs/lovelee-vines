import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Wine } from "app/view-models/wine";
import { UserService } from "app/services/user.services";
@Injectable()
export class AppDataService {
    private wines: Array<Wine> = [
        {
            id: 1, price: 0, category: "white-wines", img: "https://www.travelingvineyard.com/wp-content/uploads/2016/08/SPA107_sq.jpg",
            label: "Caballeria De Luna", origin: "Penedès, Spain", year: "2015",
            description: "Yellow straw hues in the glass. Ripe melon and stone fruit notes on the nose, along with pear, floral aromas. The palate shows cream and swe…",
            shop: "https://shop.travelingvineyard.com/24529/product/SPA107?GuideID=24529&amp;TastingID=484760&amp;HostName=Lee+Dillon",
            pair: "https://www.travelingvineyard.com/guide/24529/food-wine-pairings/sommology-search/?pairingID=W2241&amp;productID=25870"
        },
        {
            id: 2, price: 17.99, category: "red-wines", img: "https://www.travelingvineyard.com/wp-content/uploads/2017/04/POR102_sq.jpg",
            label: "Ignia", origin: "Portuguese Red Wine", year: "2015",
            description: "Opaque garnet hues in the glass. Dense with blackberry jam and red fruits; tobacco and earth notes with spices and vanilla as well. Silky ta…",
            shop: "https://shop.travelingvineyard.com/24529/product/POR102?GuideID=24529&amp;TastingID=484760&amp;HostName=Lee+Dillon",
            pair: "https://www.travelingvineyard.com/guide/24529/food-wine-pairings/sommology-search/?pairingID=R2233&amp;productID=27057"
        },
        {
            id: 3, price: 0, category: "white-wines", img: "https://www.travelingvineyard.com/wp-content/uploads/2017/03/ALV100_sq.jpg",
            label: "Screaming Goat", origin: "Alexander Valley Gewürztraminer", year: "2016",
            description: "Very pale lemon-yellow-straw, medium to medium-to-full body. White flowers, alcohol &amp; nuts nose, emerging apricot with banana aromas &amp;am…",
            shop: "https://shop.travelingvineyard.com/24529/product/ALV100?GuideID=24529&amp;TastingID=484760&amp;HostName=Lee+Dillon",
            pair: "https://www.travelingvineyard.com/guide/24529/food-wine-pairings/sommology-search/?pairingID=W3341&amp;productID=27012"
        },
        {
            id: 4, price: 0, category: "red-wines", img: "https://www.travelingvineyard.com/wp-content/uploads/2017/03/LOD101_sq.jpg",
            label: "Tanglerose", origin: "Backyard Red, Lot 14B-L, California", year: "",
            description: "Inky, opaque garnet-to-brick hues in the glass. Heady aromas of blackberry, plum and forest floor with more tangy briary red and black fruit…",
            shop: "https://shop.travelingvineyard.com/24529/product/LOD101?GuideID=24529&amp;TastingID=484760&amp;HostName=Lee+Dillon",
            pair: "https://www.travelingvineyard.com/guide/24529/food-wine-pairings/sommology-search/?pairingID=R3334&amp;productID=26942"
        },
        {
            id: 5, price: 0, category: "red-wines", img: "https://www.travelingvineyard.com/wp-content/uploads/2017/02/CLF100_sq-640x640.jpg",
            label: "Boombox", origin: "Syrah, California", year: "2015",
            description: "Inky brick, light-to-medium body. “Sour ball” red &amp; brown fruit hybrid nose is supported by black pepper, smoke &amp; tobacc…",
            shop: "https://shop.travelingvineyard.com/24529/product/CLF100?GuideID=24529&amp;TastingID=484760&amp;HostName=Lee+Dillon",
            pair: "https://www.travelingvineyard.com/guide/24529/food-wine-pairings/sommology-search/?pairingID=R2233&amp;productID=26828"
        },
        {
            id: 6, price: 0, category: "red-wines", img: "https://www.travelingvineyard.com/wp-content/uploads/2017/02/LOD100_sq-640x640.jpg",
            label: "Small Hours", origin: "Zinfandel, Lodi, California", year: "2015",
            description: "Opaque garnet-to-brick, medium-to-full body. &nbsp;Some dimension to the varietal nose over toasty oak with a touch of vanilla. &nbsp;Sleek, not-qui…",
            shop: "https://shop.travelingvineyard.com/24529/product/LOD100?GuideID=24529&amp;TastingID=484760&amp;HostName=Lee+Dillon",
            pair: "https://www.travelingvineyard.com/guide/24529/food-wine-pairings/sommology-search/?pairingID=R3232&amp;productID=26814"
        },
        {
            id: 7, price: 0, category: "white-wines", img: "https://www.travelingvineyard.com/wp-content/uploads/2017/01/MTC100_sq.jpg",
            label: "Calamity Sue", origin: "Riesling, Monterey County, California", year: "2015",
            description: "Yellow straw hues in the glass. Medium-bodied off dry with perfumed aromas of tangerine, pear, and ginger. Rich and extracted on the palate …",
            shop: "https://shop.travelingvineyard.com/24529/product/MTC100?GuideID=24529&amp;TastingID=484760&amp;HostName=Lee+Dillon",
            pair: "https://www.travelingvineyard.com/guide/24529/food-wine-pairings/sommology-search/?pairingID=W2331&amp;productID=26807"
        },
        {
            id: 8, price: 0, category: "red-wines", img: "https://www.travelingvineyard.com/wp-content/uploads/2016/12/ITA701_sq.jpg",
            label: "Avincerre", origin: "Rosso Piceno DOC", year: "2015",
            description: "Slightly murky garnet hues in the glass. Aromas of black and red fruits with an earthy-minerally core. Supple and lush with notes of black p…",
            shop: "https://shop.travelingvineyard.com/24529/product/ITA701?GuideID=24529&amp;TastingID=484760&amp;HostName=Lee+Dillon",
            pair: "https://www.travelingvineyard.com/guide/24529/food-wine-pairings/sommology-search/?pairingID=R2233&amp;productID=26376"
        },
        {
            id: 9, price: 0, category: "white-wines", img: "https://www.travelingvineyard.com/wp-content/uploads/2016/11/SOA106_sq-1-640x640.jpg",
            label: "Smirk", origin: "Moscatel, Western Cape, South Africa", year: "2016",
            description: "Coppery pale straw hue in the glass. The nose shows white flowers, rose petal and nutty, earthy notes. Ripe mandarin orange and lime sorbet …",
            shop: "https://shop.travelingvineyard.com/24529/product/SOA106?GuideID=24529&amp;TastingID=484760&amp;HostName=Lee+Dillon",
            pair: "https://www.travelingvineyard.com/guide/24529/food-wine-pairings/sommology-search/?pairingID=W2241&amp;productID=26157"
        },
        {
            id: 10, price: 0, category: "white-wines", img: "https://www.travelingvineyard.com/wp-content/uploads/2016/10/ITA699_sq.jpg",
            label: "Bella Mente", origin: "Pinot Grigio, Venezie IGT, Italy", year: "2015",
            description: "Brilliant pale yellow straw hues in the glass. Floral aromas with added notes of ripe melon, fig and date. On the palate, hints of nectarine…",
            shop: "https://shop.travelingvineyard.com/24529/product/ITA699?GuideID=24529&amp;TastingID=484760&amp;HostName=Lee+Dillon",
            pair: "https://www.travelingvineyard.com/guide/24529/food-wine-pairings/sommology-search/?pairingID=W2331&amp;productID=26092"
        },
        {
            id: 11, price: 0, category: "white-wines", img: "https://www.travelingvineyard.com/wp-content/uploads/2016/10/ITA700_sq.jpg",
            label: "Ibrido", origin: "Manzoni Bianco Veneto IGT", year: "2015",
            description: "Brilliant pale lemon yellow hues in the glass. Notes of fresh cut golden delicious apple on the nose and palate folded into layers of white …",
            shop: "https://shop.travelingvineyard.com/24529/product/ITA700?GuideID=24529&amp;TastingID=484760&amp;HostName=Lee+Dillon",
            pair: "https://www.travelingvineyard.com/guide/24529/food-wine-pairings/sommology-search/?pairingID=W2221&amp;productID=26088"
        },
        {
            id: 12, price: 0, category: "red-wines", img: "https://www.travelingvineyard.com/wp-content/uploads/2016/10/CAL998_sq.jpg",
            label: "Bentgate", origin: "California Cabernet Sauvignon", year: "2015",
            description: "Brick hues in the glass. Notes of vibrant, lip-smacking varietal fruit (think plums and black cherry), some rustic earthy notes too, with th…",
            shop: "https://shop.travelingvineyard.com/24529/product/CAL998?GuideID=24529&amp;TastingID=484760&amp;HostName=Lee+Dillon",
            pair: "https://www.travelingvineyard.com/guide/24529/food-wine-pairings/sommology-search/?pairingID=R3232&amp;productID=26031"
        },
        {
            id: 13, price: 0, category: "white-wines", img: "https://www.travelingvineyard.com/wp-content/uploads/2016/10/ITA698_sq-640x640.jpg",
            label: "Spruzzi", origin: "Grillo, Italy", year: "2015",
            description: "Pale yellow hues with green notes in the glass. Aromas of grapefruit, stone fruits and flowers on the nose. Rich mouthfeel with ripe fruitin…",
            shop: "https://shop.travelingvineyard.com/24529/product/ITA698?GuideID=24529&amp;TastingID=484760&amp;HostName=Lee+Dillon",
            pair: "https://www.travelingvineyard.com/guide/24529/food-wine-pairings/sommology-search/?pairingID=W2321&amp;productID=25976"
        },
        {
            id: 14, price: 0, category: "red-wines", img: "https://www.travelingvineyard.com/wp-content/uploads/2016/10/POR101_sq.jpg",
            label: "Ignia", origin: "Touriga Nacional Blend, Portugal", year: "2014",
            description: "Opaque garnet hues in the glass. Dense with blackberry jam and red fruits; tobacco and earth notes with spices and vanilla as well. Silky ta…",
            shop: "https://shop.travelingvineyard.com/24529/product/POR101?GuideID=24529&amp;TastingID=484760&amp;HostName=Lee+Dillon",
            pair: "https://www.travelingvineyard.com/guide/24529/food-wine-pairings/sommology-search/?pairingID=R2233&amp;productID=25981"
        },
        {
            id: 15, price: 0, category: "red-wines", img: "https://www.travelingvineyard.com/wp-content/uploads/2016/09/CAL994_sq-640x640.jpg",
            label: "LUXX", origin: "Cabernet Sauvignon, Happy Canyon, California", year: "2014",
            description: "Brilliant garnet-to-brick hues in the glass. Notes of cassis and currant on the nose followed by concentrated black cherry and dark chocolat…",
            shop: "https://shop.travelingvineyard.com/24529/product/CAL994?GuideID=24529&amp;TastingID=484760&amp;HostName=Lee+Dillon",
            pair: "https://www.travelingvineyard.com/guide/24529/food-wine-pairings/sommology-search/?pairingID=R3444&amp;productID=25938"
        },
        {
            id: 16, price: 0, category: "red-wines", img: "https://www.travelingvineyard.com/wp-content/uploads/2016/09/CAL997_sq.jpg",
            label: "5 String", origin: "Petite Sirah, Lodi, California", year: "2015",
            description: "Brilliant, opaque inky purple hues in the glass. Notes of black earth and bright blackberry on nose and palate. Supple texture with medium b…",
            shop: "https://shop.travelingvineyard.com/24529/product/CAL997?GuideID=24529&amp;TastingID=484760&amp;HostName=Lee+Dillon",
            pair: "https://www.travelingvineyard.com/guide/24529/food-wine-pairings/sommology-search/?pairingID=R3333&amp;productID=25924"
        },
        {
            id: 17, price: 0, category: "red-wines", img: "https://www.travelingvineyard.com/wp-content/uploads/2016/09/CAL993_sq.jpg",
            label: "Tria", origin: "Syrah, Lodi, California", year: "2015",
            description: "Inky, opaque brick hues in the glass. Think cinnamon dusted plums with notes of black earth and pepper. Supple mouthfeel, balanced with nice…",
            shop: "https://shop.travelingvineyard.com/24529/product/CAL993?GuideID=24529&amp;TastingID=484760&amp;HostName=Lee+Dillon",
            pair: "https://www.travelingvineyard.com/guide/24529/food-wine-pairings/sommology-search/?pairingID=R3444&amp;productID=25927"
        },
        {
            id: 18, price: 0, category: "white-wines", img: "https://www.travelingvineyard.com/wp-content/uploads/2016/08/SPA107_sq.jpg",
            label: "Caballeria De Luna", origin: "Penedès, Spain", year: "2015",
            description: "Yellow straw hues in the glass. Ripe melon and stone fruit notes on the nose, along with pear, floral aromas. The palate shows cream and swe…",
            shop: "https://shop.travelingvineyard.com/24529/product/SPA107?GuideID=24529&amp;TastingID=484760&amp;HostName=Lee+Dillon",
            pair: "https://www.travelingvineyard.com/guide/24529/food-wine-pairings/sommology-search/?pairingID=W2241&amp;productID=25870"
        },
        {
            id: 19, price: 0, category: "red-wines", img: "https://www.travelingvineyard.com/wp-content/uploads/2016/08/CAL996_square.jpg",
            label: "Tria", origin: "Pinot Noir, Monterey County, California", year: "2013",
            description: "Hues of translucent brick in the glass. Raspberry and dried strawberry notes over earth lend this wine a nice Old World/New World sensibilit…",
            shop: "https://shop.travelingvineyard.com/24529/product/CAL996?GuideID=24529&amp;TastingID=484760&amp;HostName=Lee+Dillon",
            pair: "https://www.travelingvineyard.com/guide/24529/food-wine-pairings/sommology-search/?pairingID=R2333&amp;productID=25849"
        },
        {
            id: 20, price: 0, category: "white-wines", img: "https://www.travelingvineyard.com/wp-content/uploads/2016/06/CAL992_sq.jpg",
            label: "Zeffer Hills", origin: "Chardonnay, Monterey, California", year: "2014",
            description: "Sunflower yellow hues in the glass. Ripe rich tropical and stone fruits on the nose and palate. Citrus, lemon zest, apple and nut notes as w…",
            shop: "https://shop.travelingvineyard.com/24529/product/CAL992?GuideID=24529&amp;TastingID=484760&amp;HostName=Lee+Dillon",
            pair: "https://www.travelingvineyard.com/guide/24529/food-wine-pairings/sommology-search/?pairingID=W3233&amp;productID=25786"
        },
        {
            id: 21, price: 0, category: "sweet-and-fizzy", img: "https://www.travelingvineyard.com/wp-content/uploads/2014/07/DOM011_sq-640x640.jpg",
            label: "Fissata", origin: "Red, New York", year: "",
            description: "Translucent, dark watermelon red in color, this release opens with floral, sweet-ish stone fruit over a raspberry-ish nose. A well-integrate…",
            shop: "https://shop.travelingvineyard.com/24529/product/DOM011?GuideID=24529&amp;TastingID=484760&amp;HostName=Lee+Dillon",
            pair: "https://www.travelingvineyard.com/guide/24529/food-wine-pairings/sommology-search/?pairingID=S342&amp;productID=5581"
        },
        {
            id: 22, price: 0, category: "sweet-and-fizzy", img: "https://www.travelingvineyard.com/wp-content/uploads/2014/12/DOM012_sq-640x640.jpg",
            label: "Double Date", origin: "Sweet American Rosé", year: "",
            description: "Completely American! This Finger Lakes Region sweet rosé was crafted in a joint effort with a noted producer in the wine business at one of…",
            shop: "https://shop.travelingvineyard.com/24529/product/DOM012?GuideID=24529&amp;TastingID=484760&amp;HostName=Lee+Dillon",
            pair: "https://www.travelingvineyard.com/guide/24529/food-wine-pairings/sommology-search/?pairingID=S431&amp;productID=21921"
        }
    ]

    constructor(private userService: UserService) {

    }

    createWine(vm: Wine): Observable<any> {
        //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Unable'));
        let id = 0;
        this.wines.forEach(c => { if (c.id >= id) id = c.id + 1 });
        vm.id = id;
        this.wines.push(vm);
        return Observable.of(vm);
    }

    deleteWine(id: number): Observable<any> {
        // return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Delete error.'));
        return Observable.of({}).delay(2000)
            .do(e => this.wines.splice(this.wines.findIndex(c => c.id == id), 1));
    }

    getWines(): Observable<any> {
        return Observable.of(this.wines);
    }

    getWine(id: number): Observable<Wine> {
        var wine = this.wines.find(c => c.id == id);
        return Observable.of(wine);
    }

    updateWine(updatedWine: Wine): Observable<any> {
        var wine = this.wines.find(c => c.id == updatedWine.id);
        Object.assign(wine, updatedWine);
        return Observable.of(wine).delay(2000);
        //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw(''));        

    }
}