function KnetZoom()
{
	this.Width;
	this.Height;
	this.defaultpower;
	this.powerrange;
	this.largeimage;
	this.magnifiersize;
	
	this.show = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)     		
		
		document.getElementById(this.ContainerName).innerHTML = '<img id='+ this.ContainerName + 'IMG' + ' src=' +  this.largeimage  + ' >'
		
		 var img = '#' + this.ContainerName + 'IMG';
		 				
			jQuery(document).ready(function($){ //fire on DOM ready

				$(img).addpowerzoom({
				
					defaultpower: this.defaultpower,   //default power: Ampliação 3x 3
					powerrange: this.powerrange,       //Possible range: 2x a 10x ampliação [2,10] 					
					largeimage: this.largeimage,       // "zoom.jpg"
					magnifiersize: this.magnifiersize  //Defina o tamanho da lente de aumento para 120px por 120px [120, 120]
				})	

			})
		
		
		 
		
		
		
		
		
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)


	
	
	
	
	
	
	
	
	
	
	
	
	
	///UserCodeRegionEnd: (do not remove this comment.):
}
