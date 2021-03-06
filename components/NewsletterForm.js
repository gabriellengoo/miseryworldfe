import { useState } from 'react';
import { decode } from 'html-entities';

const NewsletterForm = ( { status, message, onValidated }) => {

  const [ error, setError ] = useState(null);
  const [ email, setEmail ] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {

    setError(null);

    if ( ! email ) {
      setError( 'Please enter a valid email address' );
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = ( event ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  }

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if ( !message ) {
     return null;
    }
    const result = message?.split('-') ?? null;
    if ( "0" !== result?.[0]?.trim() ) {
     return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode( formattedMessage ) : null;
  }

  return (
    <>
      <div className="d-flex border-[#000000] pt-5 newsletter-input-fields  ">
        <div className="mc-field-group border-[#000000] text-center ">
          <input
            onChange={(event) => setEmail(event?.target?.value ?? '')}
            type="email"
            placeholder="Insert email here"
            className=" border-[#000000] text-center text-base  p-5 border-[.5] border-black;"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
          <button className="wp-block-button__link text-center text-base border-[1px] font-light border-[#bfbfbf]  bg-[#ffffff] hover:text-[#000000]   p-5" onClick={handleFormSubmit}>
          subscribe
          </button>
        </div>
        {/* <div className="button-wrap wp-block-button text-center pt-10">
          
        </div> */}
      </div>
      <div className=" border-[#000000] newsletter-form-info">
        {status === "sending" && <div>Sending...</div>}
        {status === "error" || error ? (
          <div
            className="newsletter-form-error"
            dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }}
          />
        ) : null }
        {status === "success" && status !== "error" && !error && (
          <div dangerouslySetInnerHTML={{ __html: decode(message) }} />
        )}
      </div>
    </>
  );
}

export default NewsletterForm