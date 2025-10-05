import React from 'react'
import { Input } from '../../../components/ui/input'
import { Button } from '@/components/ui/button';
import { Barcode } from 'lucide-react';
import ProductCard from './ProductCard';

const products = [{
    id: 1,
    image: "https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg",
    name: "商品名",
    sku: "味噌ラーメン",
    sellingPrice: "450",
    category: "ラーメン"
},
{
    id: 1,
    image: "https://images.pexels.com/photos/1395319/pexels-photo-1395319.jpeg",
    name: "商品名",
    sku: "塩ラーメン",
    sellingPrice: " 550",
    category: "ラーメン"
},
{
    id: 1,
    image: "https://images.pexels.com/photos/698549/pexels-photo-698549.jpeg",
    name: "商品名",
    sku: "豚肉ラーメン",
    sellingPrice: "1050",
    category: "ラーーメン"
},];


const ProductSection = () => {

    const [searchTerm, setSearchTerm] = React.useState("")
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
    return (
        <div className='w-2/5 flex-col bg-card border-r'>
            <div className='p-4 border-b bg-muted'>

                <Input className={"py-5"} placeholder="検索"
                    value={searchTerm} type={"text"}
                    onChange={handleSearchChange} />
                <div className='flex items-center justify-between pt-2'>
                    <span>{2}件の商品が見つかりました。</span>
                    {/* <span>{searchResults.length}件の商品が見つかりました。</span> */}
                    <Button variant="outline" size="sm" className="text-xs">
                        <Barcode></Barcode>スキャン</Button>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 p-5">
                {products.map((product, index) => (
                    <ProductCard product={product} key={index} />
                ))}

            </div>
        </div>
    );
};

export default ProductSection