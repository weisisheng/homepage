import React from "react";
import ReactDOM from "react-dom";

const root = document ? document.getElementById("___gatsby") : null;

export default class OpenModal extends React.PureComponent {
    state = {
        opened: false
    };

    constructor(props) {
        super(props);
        this.keyDown = this.onKeyDown.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.keyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyDown);
    }

    onKeyDown(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27 && this.state.opened) {
            this.onClose();
        }
    }

    onBackdropClick(event) {
        if (event.target === this.refs.modal) {
            this.onClose();
        }
    }

    onOpen() {
        this.setState({ opened: true });
        document.body.classList.add("no-scroll");
    }

    onClose() {
        this.setState({ opened: false });
        document.body.classList.remove("no-scroll");
    }

    render() {
        const { opened } = this.state;
        const { trigger, children } = this.props;

        const modal = (
            <div
             onClick={event => this.onBackdropClick(event)}
             ref="modal"
             tabIndex="-1"
             className={opened ? "modal in" : "modal fade"}
            >
                <div className="modal-dialog modal-lg modal-example">
                    <div className="modal-content">{children}</div>
                </div>
                <button
                 type="button"
                 onClick={() => this.onClose()}
                 className="close close-example"
                >
                    <i className="icon-times" />
                </button>
            </div>
        );

        return (
            <React.Fragment>
                <div onClick={() => this.onOpen()}>{trigger}</div>
                {opened ? root ? (
                    ReactDOM.createPortal(modal, root)
                ) : (
                    modal
                ) : null}
            </React.Fragment>
        );
    }
}
