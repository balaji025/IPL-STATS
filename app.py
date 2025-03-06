import streamlit as st

def main():
    st.title("Embedded Streamlit App")

    # Initialize session state variables
    if "password" not in st.session_state:
        st.session_state.password = ""
    if "inputValue" not in st.session_state:
        st.session_state.inputValue = ""

    st.session_state.inputValue = st.text_input("Enter Value")

    received_input = st.empty()

    if st.button("Submit"):
        received_input.markdown(f"Received Input Value: {st.session_state.inputValue}")

if __name__ == "__main__":
    main()
