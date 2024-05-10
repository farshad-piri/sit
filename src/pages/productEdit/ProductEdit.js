import Form from "react-bootstrap/Form";

function ProductEdit(){
    return(
        <>
            <div dir="rtl" className="formAddProduct">
                <Form.Group  className="mb-3">
                    <Form.Label>قیمت</Form.Label>
                    <Form.Control onChange={inputProductChange} value={dataProduct.price} type="text" name="price" multiple/>
                </Form.Group>
                <Form.Group  className="mb-3 ">
                    <Form.Label>تیتر</Form.Label>
                    <Form.Control type="text" onChange={inputProductChange} value={dataProduct.title} name="title" />
                </Form.Group>
                <Form.Group  className="mb-3 ">
                    <Form.Label>توضیحات</Form.Label>
                    <Form.Control type="text" onChange={inputProductChange} value={dataProduct.desc} size="sm" name="desc" />
                </Form.Group>
                <Form.Group  className="mb-3 ">
                    <Form.Label>عکس</Form.Label>
                    <Form.Control type="file" accept="image/*"  onChange={inputProductChangeimage} value={dataProduct.photo} size="lg" name="photo"/>
                </Form.Group>
                <Form.Group  className="mb-3 ">
                    <Form.Control type="submit"  size="lg" onClick={dataProductHandler} />
                </Form.Group>
            </div>
        </>
    )
}
 export default ProductEdit
