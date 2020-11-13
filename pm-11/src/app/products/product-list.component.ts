import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService} from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    filteredProducts: IProduct[]; 
    products: IProduct[] = [];
    errorMessage: string;
    _listFilter: string;

    constructor(private _productService: ProductService) {
        this.listFilter = '';
    }

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    

    ngOnInit(): void {
        console.log('In OnInit');
 
        this._productService.getProducts()
            .subscribe({
                next: products => {
                    this.products = products;
                    this.filteredProducts = this.products;
                },
                error: error => this.errorMessage = <any>error
            }); 
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }    
}