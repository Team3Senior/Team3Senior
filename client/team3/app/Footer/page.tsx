export default function Footer() {
    return (
      <div className='mt-40 h-85 w-full bg-black '>
        <div className='grid grid-cols-5 text-white ml-20 mt-20 gap-12'>
       
          <div>
            <h4 className='text-3xl mt-12 mb-10'>Exclusive</h4>
            <h2 className='text-xl mt-12 mb-10'>Subscribe</h2>
            <h2>Get 10% off your first order</h2>
          </div>
  
         
          <div>
            <h4 className='text-3xl mt-12 mb-10'>Support</h4>
            <h2 className='mt-12 mb-10'>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</h2>
            <h2>exclusive@gmail.com</h2>
            <h2>+88015-88888-9999</h2>
          </div>
  
       
          <div>
            <h4 className='text-3xl mt-12 mb-10'>Account</h4>
            <h2>My Account</h2>
            <h2>Login / Register</h2>
            <h2>Cart</h2>
            <h2>Wishlist</h2>
            <h2>Shop</h2>
          </div>
  
      
          <div>
            <h4 className='text-3xl mt-12 mb-10'>Quick Link</h4>
            <h2>Privacy Policy</h2>
            <h2>Terms Of Use</h2>
            <h2>FAQ</h2>
            <h2>Contact</h2>
          </div>
  
 
          <div className='mr-10'>
            <h4 className='text-3xl mt-12 mb-4'>Download App</h4>
            <h2 className='text-gray-400'>Save $3 with App New User Only</h2>
            <div className='grid grid-cols-2 mt-3'>
              <img className='w-20' src="https://qrcode.tec-it.com/API/QRCode?data=G%C3%A9n%C3%A9rateur+de+codes+QR+de+TEC-IT" alt="" />
              <div className='-ml-8'>
                <img className='w-26' src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Google_Play_Store_badge_FR.svg" alt="" />
                <img className='w-28' src="https://www.ayuntamientoparla.es/ficheros/app-cie/apple%20store.png/image" alt="" />
              </div>
            </div>
          </div>
        </div>
        <hr className='text-slate mt-14' />
        <h3 className='text-slate text-center mt-3'>Copyright Rimel 2022. All right reserved</h3>
      </div>
    );
  }