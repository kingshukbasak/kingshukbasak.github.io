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
		var paper =  Raphael(100,50, 1230, 1050);
		/*var path_b = paper.path("m 453.82593,412.80619 c -6.3097,2.79897 -13.09189,4.68982 -20.20852,5.54049 7.26413,-4.35454 12.84406,-11.24992 15.47067,-19.46675 -6.79934,4.03295 -14.3293,6.96055 -22.34461,8.53841 -6.41775,-6.83879 -15.56243,-11.111 -25.68298,-11.111 -19.43159,0 -35.18696,15.75365 -35.18696,35.18525 0,2.75781 0.31128,5.44359 0.91155,8.01875 -29.24344,-1.46723 -55.16995,-15.47582 -72.52461,-36.76396 -3.02879,5.19662 -4.76443,11.24048 -4.76443,17.6891 0,12.20777 6.21194,22.97747 15.65332,29.28716 -5.76773,-0.18265 -11.19331,-1.76565 -15.93716,-4.40083 -0.004,0.14663 -0.004,0.29412 -0.004,0.44248 0,17.04767 12.12889,31.26806 28.22555,34.50266 -2.95247,0.80436 -6.06101,1.23398 -9.26989,1.23398 -2.2673,0 -4.47114,-0.22124 -6.62011,-0.63114 4.47801,13.97857 17.47214,24.15143 32.86992,24.43441 -12.04227,9.43796 -27.21366,15.06335 -43.69965,15.06335 -2.84014,0 -5.64082,-0.16722 -8.39349,-0.49223 15.57186,9.98421 34.06703,15.8094 53.93768,15.8094 64.72024,0 100.11301,-53.61524 100.11301,-100.11387 0,-1.52554 -0.0343,-3.04251 -0.10204,-4.55261 6.87394,-4.95995 12.83891,-11.15646 17.55618,-18.21305 z");
		var group_a = paper.set(); 
		path_b.attr({fill: '#2aa9e0',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'});
		//.transform("t-282.32053,-396.30734").data('id', 'path_b'); 
		group_a.attr({'name': 'group_a'});
		group_a.transform("t-282.32053,-396.30734"); 
		var rsrGroups = [group_a]; group_a.push( path_b );	*/
		/*for (var i = 0; i < 5; i++) {
    	  paper.circle(10 + 15 * i, 10, 10)
         .attr({fill: "#000"})
         .data("i", i)
         .click(function () {
            alert(this.data("i"));
         });
		}*/
		createElements({ element: "div", parentelement: "maindiv", id:"sort",
		style: { left:"254px",position:"absolute",top:"11px",width:"873px"} });
		createElements({ element: "label", parentelement: "sort", innerHTML:"SORT BY",
		style: { border: "1px solid black", padding: "5px 60px 5px 33px" } });
		createElements({ element: "select", parentelement: "sort", id: "selectcategory",
			style: { padding: "5px 60px 5px 60px",margin: "10px 2px"},
			addEventListener: [["change", sortCategory]] });
		createElements({ element: "option", parentelement: "selectcategory", number:7,innerHTML:["SELECT","View All","Impassioned","Exclamatory","Quotation","Promotion","Hashtags","@tags","Vernaculars"],selected:["","selected"], id: ["select","","impassioned","!!","~","http","#","@","vernaculars"]});
		createElements({ element: "label", parentelement: "sort", innerHTML:"SORT BY",
		style: { border: "1px solid black", padding: "5px 60px 5px 33px" } });
		createElements({ element: "select", parentelement: "sort", id: "selectsort",
			style: { padding: "5px 60px 5px 60px",margin: "10px 2px"},
			addEventListener: [["change", sortData]] });
		createElements({ element: "option", parentelement: "selectsort", number:3,innerHTML:["SELECT","RETWEET","FAVOURITES","CREATED AT"],selected:["","selected"], id: ["select1","retweet","favcount","createdat"]});


		var obj,tweet={},k,xspace,yspace,m,i,objlength,strlength,xsize,ysize;
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
			yspace=80;
			xsize=10;
			ysize=10;
			objlength=obj.length;

			var option=document.getElementById("selectsort"),
			opacity=1/objlength,
			sizeincrement=40/objlength,
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
				if(xspace+xsize>=1000) {
						yspace+=ysize+3;
						xspace=0;
				}
				var tweets=paper.image("twitter.svg",-100, -100, xsize, ysize);
				tweets.attr({'title' : obj[i].tweet, "opacity":1} );		
				anim = Raphael.animation({x: xspace, y: yspace}, 100);
				tweets.animate(anim.delay(100*(i+1)));
				tweets.mouseover((function viewTweet(obj,xspace,yspace,tweets) {
									return function() {
										var stretch=tweets.getBBox().x2-tweets.getBBox().x;
										//console.log(tweets.getBBox());
										//var rect=paper.rect(xspace+stretch,yspace,100,100);
										var text=paper.set();
										text.push(
										paper.text(xspace+stretch+40,yspace,"Retweet: "+obj.retweet),
										paper.text(xspace+stretch+60,yspace+10,"Favourite Count: "+obj.favcount),
										paper.text(xspace+stretch+118,yspace+20,"Created At: "+obj.createdat)
										);
										tweets.mouseout(function(){
											text.remove();
										});
									}
								})(obj[i],xspace,yspace,tweets));
				xspace+=xsize+3;

				
			}
		}
		sortCategory();
		sortData();
	}
	category();
};

