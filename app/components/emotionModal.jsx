var React = require('react');
var ReactBoot = require('react-bootstrap/');

 module.exports = React.createClass({
  getInitialState() {
    return { showModal: false, emoSVG: this.props };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    
    Modal = ReactBoot.Modal;
    Button = ReactBoot.Button;
    OverlayTrigger = ReactBoot.OverlayTrigger;
    

    return (
      <div>
        
       <img className="img-responsive" id="response-glyph" src="thought.svg" href="#" onClick={this.open}></img>
      

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>EmotiComments</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Send a Response</h4>
            

            
            <hr />

            <h4>Choose EmotiComment</h4>

             {
                        this.props.emosvg.map(function(s,index){
                            return(
                                <img info={s} key={"emosvg"+index} />
                            )         
                        })
              }

            <img className="emoSvg" src="angel.svg"/>
            <img  src="happy.svg"/>
            <img  src="disappointed.svg"/>
            <img  src="neutral.svg"/>
            <img  className="emoSvg" src="triumph.svg"/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});