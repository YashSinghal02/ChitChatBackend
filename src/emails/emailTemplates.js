export function createWelcomeEmailTemplate(name, clientURL) {
  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to ChitChat</title>
  </head>

  <body
    style="
      margin: 0;
      padding: 0;
      background-color: #05030a;
      font-family: Arial, Helvetica, sans-serif;
      color: #ffffff;
    "
  >

    <table
      width="100%"
      cellpadding="0"
      cellspacing="0"
      border="0"
      style="
        background-color: #05030a;
        width: 100%;
      "
    >
      <tr>
        <td
          align="center"
          style="padding: 45px 15px;"
        >

          <!-- Main Email -->
          <table
            width="100%"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="
              max-width: 570px;
              background-color: #0b0813;
              border: 1px solid #2e2145;
              border-radius: 16px;
              overflow: hidden;
            "
          >

            <!-- Header -->
            <tr>
              <td
                align="center"
                style="
                  padding: 38px 30px 30px;
                "
              >

                <!-- Logo with Transparent Purple Circle -->
                <table
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  align="center"
                  style="margin: 0 auto 18px;"
                >
                  <tr>
                    <td
                      align="center"
                      valign="middle"
                      style="
                        width: 90px;
                        height: 90px;
                        background-color: rgba(112, 79, 220, 0.12);
                        border: 1px solid rgba(112, 79, 220, 0.22);
                        border-radius: 50%;
                      "
                    >

                      <img
                        src="https://github.com/YashSinghal02/ChitChatFrontend/blob/main/public/loadingIcon.png?raw=true"
                        alt="ChitChat"
                        width="72"
                        height="72"
                        style="
                          display: block;
                          width: 72px;
                          height: 72px;
                          margin: 0 auto;
                          border-radius: 15px;
                        "
                      />

                    </td>
                  </tr>
                </table>


                <!-- Heading -->
                <h1
                  style="
                    margin: 0;
                    color: #ffffff;
                    font-size: 27px;
                    line-height: 1.3;
                    font-weight: 600;
                    letter-spacing: -0.3px;
                  "
                >
                  Welcome to ChitChat
                </h1>


                <!-- Subtitle -->
                <p
                  style="
                    margin: 9px 0 0;
                    color: #8f87a3;
                    font-size: 14px;
                    line-height: 1.5;
                  "
                >
                  Your conversations start here.
                </p>

              </td>
            </tr>


            <!-- Divider -->
            <tr>
              <td style="padding: 0 35px;">

                <div
                  style="
                    height: 1px;
                    background-color: #211b30;
                    font-size: 0;
                  "
                ></div>

              </td>
            </tr>


            <!-- Content -->
            <tr>
              <td
                style="
                  padding: 32px 40px 10px;
                "
              >

                <!-- Greeting -->
                <p
                  style="
                    margin: 0 0 18px;
                    color: #ffffff;
                    font-size: 16px;
                    line-height: 1.6;
                  "
                >
                  Hello <strong>${name}</strong>,
                </p>


                <!-- Message -->
                <p
                  style="
                    margin: 0 0 18px;
                    color: #aaa2b9;
                    font-size: 14px;
                    line-height: 1.8;
                  "
                >
                  Welcome to ChitChat. Your account has been successfully
                  created and you're ready to start chatting.
                </p>


                <p
                  style="
                    margin: 0;
                    color: #aaa2b9;
                    font-size: 14px;
                    line-height: 1.8;
                  "
                >
                  Find your contacts, start a conversation, and stay connected
                  in real time.
                </p>

              </td>
            </tr>


            <!-- CTA -->
            <tr>
              <td
                align="center"
                style="
                  padding: 30px 40px 35px;
                "
              >

                <a
                  href="${clientURL}"
                  style="
                    display: inline-block;
                    background-color: #533993;
                    color: #ffffff;
                    text-decoration: none;
                    font-size: 14px;
                    font-weight: 600;
                    padding: 12px 28px;
                    border-radius: 7px;
                  "
                >
                  Open ChitChat
                </a>

              </td>
            </tr>


            <!-- Small Note -->
            <tr>
              <td
                align="center"
                style="
                  padding: 0 35px 32px;
                "
              >

                <p
                  style="
                    margin: 0;
                    color: #6f687c;
                    font-size: 12px;
                    line-height: 1.6;
                  "
                >
                  We're glad to have you here.
                </p>

              </td>
            </tr>


            <!-- Footer -->
            <tr>
              <td
                style="
                  border-top: 1px solid #211b30;
                  padding: 20px 30px;
                  text-align: center;
                  background-color: #08060d;
                "
              >

                <p
                  style="
                    margin: 0 0 6px;
                    color: #756d82;
                    font-size: 11px;
                  "
                >
                  © 2026 ChitChat
                </p>


                <p
                  style="
                    margin: 0;
                    color: #514b5c;
                    font-size: 10px;
                  "
                >
                  This is an automated email from ChitChat.
                </p>

              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
  </html>
  `;
}