import { Component } from '@angular/core';
import { Category } from 'src/items/categories';
import { Product, products } from 'src/items/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  currentCategory: string = "All";
  allItems: any = products;
  categories: string[] = this.handleCategoriesList(this.allItems);

  public get getAllItems(): any {
    return this.allItems;
  }

  public set setAllItems(val: any) {
    this.allItems = val;
  }
  share(name:string, url:string) {
    window.open(`https://t.me/share/url?url=${name}&text=${url}`);
  }

  handleCategory(category: string): any {
    this.currentCategory = category;
    return this.currentCategory === "All" ? this.allItems : this.allItems.filter((item: { category: Category }) => item.category.name === category);
  }

  handleCategoriesList(items: Product[]): string[] {
    const categories = new Set<string>();
    categories.add("All");
    items.forEach((item) => categories.add(item.category.name));
    return Array.from(categories);
  }

  updateLike(likes: number, product: Product) {
    product.likes = likes;
  }

  handleDelete(product: Product): void {
    const index = this.allItems.indexOf(product);
    if (index !== -1) {
      this.allItems.splice(index, 1);
    }
  }
}
