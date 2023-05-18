  export default function stripeErrorHandler(error){

    switch (error.type) {
        case 'StripeCardError':
          console.log(error.type,error.message)
          break;
        case 'StripeRateLimitError':
          break;
        case 'StripeInvalidRequestError':
           console.log(error.type,error.message)
          break;
        case 'StripeAPIError':
            console.log(error.type,error.message)
          break;
        case 'StripeConnectionError':
            console.log(error.type,error.message)
          break;
        case 'StripeAuthenticationError':
            console.log(error.type,error.message)
          break;
        default:
            console.log(error.type,error.message)
          break;
      }
  }