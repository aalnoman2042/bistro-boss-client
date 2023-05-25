import { Parallax } from 'react-parallax';


const Cover = ({img, title}) => {
    return (
        <Parallax 
        style={{height:700}}
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
        <div className="h-[700px] hero" >
  <div className="bg-opacity-50 hero-overlay"></div>
  <div className="text-center text-white hero-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    
    </div>
  </div>
</div>
        <div style={{ height: '200px' }} />
    </Parallax>

        
        
    );
};

export default Cover;