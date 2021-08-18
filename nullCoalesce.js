function calculatePrice(price, taxes, description) {

    taxes = taxes ?? 0.20; //?

    description = description ?? "No Description given.";

    let total = price * (1 + taxes);
    total = total.toFixed(2);

    console.log(`${description} Tax : £${total}`);

}


calculatePrice(1, 0.25, "Toilet Rolls with");
calculatePrice(1, undefined, "Toilet Rolls without");