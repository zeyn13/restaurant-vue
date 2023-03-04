<template>
  <div class="shopping-cart-section">
    <div class="heading">
      <span>Shopping cart</span>
      <h3>Good Products, fast delivery</h3>
    </div>

    <div class="container">
      <div class="wrapper wrapper-content">
        <div class="row">
          <div class="in-cart col-md-9">
            <div class="box">
              <div class="box-title item-total row">
                <h3>
                  <p style="font-size: 15px">
                    {{ filterFoods.length.toString() }}
                    <span v-if="filterFoods.length < 2">Item</span>
                    <span v-else>Items</span>
                  </p>
                  In Your Cart
                </h3>
              </div>

              <div v-if="!filterFoods.length">
                <div class="box-content row no-food">
                  <div class="content">
                    <h2 style="color: #057835fa">
                      You do not have any items in your cart, go shop now!
                    </h2>
                  </div>
                  <div class="image">
                    <img src="../assets/images/notfound.png" alt="" />
                  </div>
                </div>
              </div>

              <div v-else>
                <div v-for="(f, index) in filterFoods" :key="index">
                  <div class="box-content row">
                    <div class="image-box col-sm-3" style="padding-left: 0">
                      <img
                        :src="require(`../assets/images/${f.food_src}`)"
                        alt=""
                        class="cart-product-img"
                      />
                    </div>

                    <div class="desc col-sm-4">
                      <h2 class="item-name">{{ f.food_name }}</h2>
                      <div class="item-desc">
                        <b>Description</b>
                        <p>{{ f.food_desc }}</p>
                      </div>
                      <button class="btn remove-btn" @click="removeBtn(index)">
                        <i class="fa fa-trash"></i>Remove item
                      </button>
                    </div>

                    <div class="item-price col-sm-1">
                      <span class="sale-price"
                        >${{
                          parseFloat(f.food_price) - parseFloat(f.food_discount)
                        }}</span
                      >
                      <p class="text-muted first-price">
                        v-if="parseFloat(f.food_discount) != 0.00"> ${{
                          parseFloat(f.food_price)
                        }}
                      </p>
                    </div>

                    <div class="item-qty col-sm-2 d-inline">
                      <label
                        for="iQuantity"
                        style="font-size: 12px; padding-right: 2px"
                        >Quantity:</label
                      >
                      <input
                        type="number"
                        id="iQuantity"
                        class="form-control item-quantity"
                        :value="itemQuantity[index]"
                        min="1"
                        max="1000"
                        @change="onQtyChange($event, index)"
                      />
                    </div>

                    <div class="cal-total col-sm-2">
                      <h4 class="item-total">
                        ${{ calculateItemPrice(index) }}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="box-content row">
              <router-link to="/menu" class="btn shop-btn"
                ><i class="fa fa-arrow-left"></i>Continue shopping</router-link
              >
              <button
                class="btn check-out-btn"
                style="margin-left: 10px"
                :disabled="filterFoods.length ? false : true"
                @click="checkOutBtn()"
              >
                <i class="fa fa fa-shopping-cart"></i>Checkout
              </button>
            </div>
          </div>

          <div class="col-md-3">
            <div class="box">
              <div class="box-title">
                <h3>Cart Summary</h3>
              </div>

              <div class="box-content">
                <span>Summary</span>
                <h3 class="font-bold total-first-price">
                  ${{ calculateSummaryPrice()[0] }}
                </h3>

                <span>Discount</span>
                <h3 class="font-bold total-discount">
                  ${{ calculateSummaryPrice()[1] }}
                </h3>

                <span>Delivery fee</span>
                <h3 class="font-bold total-delivery">
                  ${{ calculateSummaryPrice()[2] }}
                </h3>

                <hr />

                <span>Total</span>
                <h2 class="font-bold total-sale">
                  ${{ calculateSummaryPrice()[3] }}
                </h2>

                <div class="btn-group">
                  <button
                    class="btn check-out-btn"
                    :disabled="filterFoods.length ? false : true"
                    @click="checkOutBtn()"
                  >
                    <i class="fa fa-shopping-cart"></i> Checkout
                  </button>
                  <button
                    class="btn cancel-btn"
                    @click="cancelBtn()"
                    :disabled="filterFoods.length ? false : true"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>

            <div class="box">
              <div class="box-title">
                <h3>Support</h3>
              </div>
              <div class="box-content text-center">
                <h3><i class="fa fa-phone"></i> +84 123 123 123</h3>
                <span class="small">
                  Please contact with us if you have any questions. We are
                  avalible 24h.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "Cart",

  data() {
    return {
      cartItem: [],
      itemQuantity: [],
    };
  },

  created() {
    this.getAllCartItem();
  },

  computed: {
    ...mapState(["allFoods", "user"]),

    filterFoods: function () {
      return this.allFoods.filter((f) => this.matchID(f, this.cartItem));
    },
  },

  methods: {
    matchID: function (food, cartArray) {
      let temp = "";
      cartArray.forEach((element) => {
        if (parseInt(food.food_id) == element) {
          temp = food;
        }
      });
      return temp;
    },

    calculateItemPrice: function (index) {
      return (
        (parseInt(this.filterFoods[index].food_price) -
          parseInt(this.filterFoods[index].food_discount)) *
        this.itemQuantity[index]
      ).toString();
    },

    calculateSummaryPrice: function () {
      let subtotal = 0;
      let discount = 0;
      let delivery = 15;
      let i = 0;
      while (i < this.itemQuantity.length) {
        subtotal =
          subtotal +
          parseInt(this.filterFoods[i].food_price) * this.itemQuantity[i];
        discount =
          discount +
          parseInt(this.filterFoods[i].food_discount) * this.itemQuantity[i];
        i = i + 1;
      }
    },
  },
};
</script>
