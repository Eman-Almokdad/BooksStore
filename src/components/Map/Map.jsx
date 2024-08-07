
import './Map.css'

const Map = () => {

  return (
    <div className={`map , `}>
        <div className='left'>
            <h1>Did you know us? </h1>
            <p>We are about books and our purpose is to show you the book who can chage your life or distract you from the real world în a better one. BWorld works with the must popular publishs just for your delight. 
                If you are about books, you must to subscribe to our newsletter. </p>
            <input type="text" placeholder='Your name '/>
            <input type="text"placeholder='Your e-mail' />
            <button>Subscribe</button>
        </div>
        <div className='right'>
            <iframe className='link-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106456.35619929656!2d36.36529758049304!3d33.50759136630692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x6b9f66ebd1e394f2!2z2K_Zhdi02YLYjCDYs9mI2LHZitin!5e0!3m2!1sar!2s!4v1705170979709!5m2!1sar!2s"  ></iframe>
        
        </div>
    </div>
  )
}

export default Map