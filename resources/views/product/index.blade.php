@extends('layouts.app')
    
    @section('content')
    <div class="container">
        <div class="container-wrapper d-flex align-items-center justify-content-between   p-3 mb-2 bg-success text-white mt-3">
            <div class="title-container ">
                <h4>My Product</h4>
            </div>
            <div class="add-product">
                <button class="btn btn-primary fw-light" id="addProduct">
                    Add Product
                </button>
            </div>


        </div>
        <div class="product-container d-flex align-items-center justify-content-start flex-wrap">
                <!-- <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="..." alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div> -->
            </div>
    </div>
    <!-- Modal Add Product -->
    <div class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add Product</h5>
                <button type="button" class="close btn-danger" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true " class="fs-5">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-group mt-2">
                    <label>Title:</label>
                    <input type="text" class="form-control mt-2" id="title" placeholder="Title">
                </div>
                <div class="form-group mt-2">
                    <label >Description:</label>
                    <textarea class="form-control mt-2" id="description" rows="3"></textarea>
                </div>
                <div class="form-group mt-2">
                    <label >Product Image:</label>
                    <input type="file" class="form-control mt-2" id="image" placeholder="Product Image">
                </div>
                <div class="form-group mt-2">
                    <label >Price:</label>
                    <input type="number" class="form-control mt-2" id="price" placeholder="Price">
                </div>
                <div class="form-group mt-2">
                    <label >Quantity:</label>
                    <input type="number" class="form-control mt-2" id="qty" placeholder="Quantity">
                </div>
                <div class="form-group mt-2">

                    <input type="hidden" class="form-control mt-2" id="user_id" placeholder="Quantity" value="{{Auth::id()}}">
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="uploadProduct">Save changes</button>

            </div>
            </div>
        </div>
        </div>
    @endsection

 
