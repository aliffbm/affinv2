var React =require('react');


module.exports = React.createClass({


render: function(){

return(
		<div className="container" id="homePageIn">
			<div className="container" id="containerHome">
				<div className="row" id="task_to_complete_home">
					<div className="col-sm-12 text-center">
						
					 	<div className="col-sm-7" id="size_of_task_div">
					 	<div className="col-sm-12" id="task_text_container_header">
					 		<h3>Your task is dishes</h3>
					 	</div>
					 	<div className="col-sm-12" id="task_text_container_info">
					 	<p># of days to Complete: No.</p>
         				</div>
         				</div>
         				<div className="col-sm-5">
         				<p>When dishes are clean people...</p>
         				<ul id="myTaskSentiment">
         					<li><img src="happyCartWheel.png"/>Feel better</li>
         					<li><img src="money.png"/> Don't have to spend money to eat out</li>
         				</ul>
         				</div>
					</div>
					<div className="col-sm-2">
					</div>
					<div className="col-sm-3 text-center" id="complete_chore_btn">

					<button type="button" className="btn btn-primary btn-lg raised">Compete Chore!</button>											
					</div>
					<div className="col-sm-7">
					</div>
				</div>
				<div className="row" id="rowHomeEmoticons">	
				</div>
			</div>
		</div>

		)

	}

});