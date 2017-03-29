/**
 * Created by owner on 2017-03-29.
 */
import {Component} from '@angular/core'
import {CarPart} from './car-part';
import {CARPARTS} from './mocks';
@Component({
    selector: 'car-parts',
    templateUrl: 'app/car-part/car-parts.component.html',
    styleUrls : ['app/car-part/car-parts.component.css']
})
export class CarPartsComponent {
    totalCarParts() {
        let sum = 0;
        // return this.carParts.reduce(function(first, now)
        //     {
        //         return first+now.inStock;
        //     },0
        // )
        return this.carParts.reduce((first, now) =>
            first += now.inStock,0);
    }
    carParts : CarPart[] ;

    ngOnInit() {
        this.carParts = CARPARTS;
    }

}