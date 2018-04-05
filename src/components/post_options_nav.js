import React ,{Component} from 'react';



export default class PostOptions extends Component{

  render(){

  const { changeView , view } = this.props;


  const editClassName = `fas fa-pencil-alt nav-link ${!view ? '' : 'active'}`;
  const previewClassName = `fas fa-eye nav-link ${view ? 'active' : ''}`;

  return(
    <nav className = "navbar navbar-light bg-light navbar-expand-lg field-content-option-nav mb-2">
      <ul className = "navbar-nav">
        {/* Modal triggerer */}
        <li className = "nav-item" onClick={()=> changeView(0)}><i title = "edit post" className={editClassName}></i></li>
        <li className = "nav-item" onClick={()=> changeView(1)}><i title = "preview post" className={previewClassName}></i></li>
        <li className = "nav-item"><i className="fas fa-info-circle nav-link" title="markdown info" data-toggle="modal" data-target = "#modal-markdown-info" title="preview" ></i></li>
      </ul>
      {/* Modal  start */}
        <div className="modal fade" id="modal-markdown-info" tabIndex="-1" role="dialog" aria-labelledby="modal-markdown-info-label" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modal-markdown-info-label">Markdown syntax helper</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body text-center">
          <h2>Need help with <span className= "color-green">markdown</span> <span className="color-violet">syntax</span>?</h2>
          <h4>Check out this guide by <a target="_blank" href="https://daringfireball.net/" className = "color-red">DaringFireball</a></h4>
          <button className= "btn btn-primary"><a target="_blank" href="https://daringfireball.net/projects/markdown/syntax">Lets go!</a></button>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
   {/* Modal end */}
  </nav>
  )

  }


}
