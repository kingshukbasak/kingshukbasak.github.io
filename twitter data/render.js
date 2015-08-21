window.onload=function()
{
	var length=data.length;
	var mainBody = document.getElementsByTagName("body")[0];
	function createElements(object)
     {
        var i = 0, element, number, j, k;
        number = object.number;
        if (isNaN(number))//checking for number of instance to create of the same type pf element with the same style
            number = 0;
        for (j = 0; j <= number; j++)
         {
            element = document.createElement(object.element);
            //applying the attributes,style and eventlistener
            for (i = 2; i < Object.keys(object).length; i++) 
            {
                var temp = Object.keys(object)[i];

                var typeproperty = typeof (object[temp]);
                if (typeproperty == "object" && temp != 'style' && temp != 'addEventListener')
                    element[temp] = object[temp][j];
                else if (temp == 'style') 
                {
                    for (k in object[temp])
                        element[temp][k] = object[temp][k];
                }
                else if (temp == 'addEventListener') 
                {
                    var event = object[temp][j][0];
                    var func = object[temp][j][1];
                    element[temp](event, func);
                }


                else
                    element[temp] = object[temp];

            }

            var parentelement = document.getElementById(object.parentelement);
            parentelement.appendChild(element);//adding the child node to the parent

        }
    }

    mainBody.id = "body";
    createElements({ element: "div", parentelement: "body", id: "maindiv" });
    function createHeadings() {
	    createElements({ element: "div", parentelement: "maindiv", id: "headings" });
	    createElements({ element: "div", parentelement: "maindiv", id: "headings" });
	    createElements({ element: "label", parentelement: "headings", innerHTML:"TWEET", id: "tweet",
		style: { border: "1px solid black", padding: "5px 150px 5px 150px" } });
	    createElements({ element: "label", parentelement: "headings", innerHTML:"ID", id: "id",
		style: { border: "1px solid black", padding: "5px 105px 5px 105px" } });
		createElements({ element: "label", parentelement: "headings", number:2 ,innerHTML:["RETWEET","FAV COUNT","FOLLOW COUNT"], id: ["retweet","favcount","folllowcount"],
		style: { border: "1px solid black", padding: "5px 10px 5px 10px" } });
		createElements({ element: "label", parentelement: "headings", innerHTML:"CREATED AT", id: "createdat",
		style: { border: "1px solid black", padding: "5px 60px 5px 60px" } });
	}
	function viewall() {
		for(var i=0;i<length;i++) {
	    	var id,tweet,retweet,favcount,folllowcount,createdat;
	    	id=data[i].id;
	    	retweet=data[i].retweet_count;
	    	favcount=data[i].favorite_count;
	    	folllowcount=data[i].user.followers_count;
	    	createdat=data[i].created_at;
	    	tweet=data[i].text;
	    	createElements({ element: "div", parentelement: "maindiv", id: "tweet"+i,
	    	style:{margin: "14px 0px 0px 0px" ,overflow:"auto",padding: "8px 0px"}});
	    	createElements({ element: "div", parentelement: "tweet"+i, innerHTML:tweet, id: "tweet"+i,
			style: { border: "1px solid black",float:"left",width:"355px"} });
	    	createElements({ element: "label", parentelement: "tweet"+i, innerHTML:id, id: "id"+i,
			style: { border: "1px solid black",padding: "5px 40px 5px 40px",position:"relative",top:"16px" } });
			createElements({ element: "label", parentelement: "tweet"+i, number:2,innerHTML:[retweet,favcount,folllowcount,createdat], id: ["retweet"+i,"favcount"+i,"folllowcount"+i],
			style: { border: "1px solid black", padding: "5px 30px 5px 30px",position:"relative",top:"16px"} });
			createElements({ element: "label", parentelement: "tweet"+i, innerHTML:createdat, id: "createdat"+i,
			style: { border: "1px solid black", padding: "5px 60px 5px 60px",position:"relative",top:"16px" } });
	    }
	}
	function category() {
		var paper = new Raphael(document.getElementById('maindiv'), 900, 5000);
		/*for (var i = 0; i < 5; i++) {
    	  paper.circle(10 + 15 * i, 10, 10)
         .attr({fill: "#000"})
         .data("i", i)
         .click(function () {
            alert(this.data("i"));
         });
		}*/
		createElements({ element: "div", parentelement: "maindiv", id:"sort",
		style: { left:"965px",position:"absolute",top:"19px",width:"203px"} });
		createElements({ element: "label", parentelement: "sort", innerHTML:"SORT BY",
		style: { border: "1px solid black", padding: "5px 60px 5px 33px" } });
		createElements({ element: "select", parentelement: "sort", id: "selectcategory",
			style: { padding: "5px 60px 5px 60px",margin: "10px 0px"},
			addEventListener: [["click", sortCategory]] });
		createElements({ element: "option", parentelement: "selectcategory", number:7,innerHTML:["SELECT","View All","Impassioned","Exclamatory","Quotation","Promotion","Hashtags","@tags","Vernaculars"], id: ["select","","impassioned","!!","~","http","#","@","vernaculars"]});
		createElements({ element: "label", parentelement: "sort", innerHTML:"SORT BY",
		style: { border: "1px solid black", padding: "5px 60px 5px 33px" } });
		createElements({ element: "select", parentelement: "sort", id: "selectsort",
			style: { padding: "5px 60px 5px 60px",margin: "10px 0px"},
			addEventListener: [["click", sortData]] });
		createElements({ element: "option", parentelement: "selectsort", number:3,innerHTML:["SELECT","RETWEET","FAVOURITES","CREATED AT"], id: ["select1","retweet","favcount","createdat"]});
		//createElements({ element: "option", parentelement: "selectsort",innerHTML:"FAVOURITES", id: "favcount"});
		//createElements({ element: "option", parentelement: "selectsort",innerHTML:"CREATED AT", id: "createdat"});


		var obj,tweet={},k,xspace,yspace,m,i,objlength,strlength,xsize,ysize;


		/*for(k=0;k<length;k++) {
				if(data[k].text.search('http')!=-1)
				{
					tweet={ retweet:data[k].retweet_count,
	    					favcount:data[k].favorite_count,
	    					folllowcount:data[k].user.followers_count,
	    					createdat:data[k].created_at,
	    					tweet:data[k].text};
	    			obj[m++]=tweet;
				}
		}*/
		function sortCategory() {
			paper.clear();
			var option=document.getElementById("selectcategory"),
			hindi,uppercaps,uppercount;
			option=option.options[option.selectedIndex].id;
			document.getElementById("selectsort").selectedIndex=0;
			obj=[];m=0;

			if(option=='impassioned') {
				for(k=0;k<length;k++) {
					uppercount=0;
					strlength=data[k].text.search('http');
					if(strlength==-1)
						strlength=data[k].text.length;
					for(i=0;i<strlength;i++) {
						uppercaps=data[k].text.charCodeAt( i );
						if (uppercaps>=65 && uppercaps<=90)	
							uppercount++;
						else 
							uppercount=0;
						if(uppercount==5) {
							storeData(m++,data[k]);
				    		break;
				    	}
					}
				}
				console.log(m);
				return;
			}

			if(option=='vernaculars') {
				for(k=0;k<length;k++) {
					for(i=0,strlength=data[k].text.length;i<strlength;i++)
					if (hindi=data[k].text.charCodeAt( i ), hindi > 2000 && hindi< 3000) {
						storeData(m++,data[k]);
		    			break;
					}
				}
				return;
			}
			for(k=0;k<length;k++) {
				if(data[k].text.search(option)!=-1)
					storeData(m++,data[k]);
			}

		}
		function storeData(m,data) {
			tweet={ retweet:data.retweet_count,
	    			favcount:data.favorite_count,
	    			folllowcount:data.user.followers_count,
	    			createdat:data.created_at,
	    			tweet:data.text
	    			};
	    	obj[m]=tweet;

		}
		function sortData() {
			paper.clear();
			xspace=0;
			yspace=0;
			xsize=5;
			ysize=5;
			objlength=obj.length;

			var option=document.getElementById("selectsort"),
			opacity=1/objlength,
			sizeincrement=0.5,
			anim;
			option=option.options[option.selectedIndex].id;
			if(option=='select1')
				return;
			obj.sort(function(a, b){
 				return a[option]-b[option];
			});
			for(i=0;i<objlength;i++) {
				xsize+=sizeincrement;
				ysize+=sizeincrement;
				if(xspace+xsize>=900)
					{
						yspace+=ysize+3;
						xspace=0;
					}
				var rect=paper.image("twitter.png",-50, -50, xsize, ysize);
				rect.attr({'title' : obj[i].tweet, "opacity":opacity*i} );		
				anim = Raphael.animation({x: xspace, y: yspace}, 100);
				rect.animate(anim.delay(100*(i+1)));
				rect.glow({width:0.5,opacity:0.5,color:"blue",offsetx: xspace+50,offsety: yspace+50});
				xspace+=xsize+3;

				
			}
		}
	}
	category();
};

/*window.onload = function() {
    var paper = new Raphael(document.getElementById('canvas_container'), 500, 500);
    var circle = paper.circle(100, 100, 80);

    var anim = Raphael.animation({cx: 10, cy: 20}, 2e3);
circle.animate(anim); // run the given animation immediately
//circle2.animate(anim.delay(500)); // run the given animation after 500 ms
};
*/
