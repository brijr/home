import { Main, Section, Container } from "@/components/craft";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <Main>
      <Section className="border-b">
        <Container>
          <h1>This is a test h1!</h1>
          <p>Hello World!</p>
          <ModeToggle />
        </Container>
      </Section>
      <Section className="border-b">
        <Container>
          <h2>Subheading</h2>
          <h3>Sub-subheading</h3>
          <h4>Sub-sub-subheading</h4>
          <h5>Sub-sub-sub-subheading</h5>
          <h6>Sub-sub-sub-sub-subheading</h6>
          <p>
            This is a paragraph with <a href="#">an inline link</a>.
          </p>
          <blockquote>A blockquote would be here.</blockquote>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
          <ol>
            <li>Ordered item 1</li>
            <li>Ordered item 2</li>
            <li>Ordered item 3</li>
          </ol>
          <code>Code snippet</code>
          <pre>Preformatted text</pre>
        </Container>
      </Section>
      <Section className="border-b">
        <Container>
          <h2>This is a Heading</h2>
          <table>
            <thead>
              <tr>
                <th>Header 1</th>
                <th>Header 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data 1</td>
                <td>Data 2</td>
              </tr>
              <tr>
                <td>Data 1</td>
                <td>Data 2</td>
              </tr>
              <tr>
                <td>Data 1</td>
                <td>Data 2</td>
              </tr>
              <tr>
                <td>Data 1</td>
                <td>Data 2</td>
              </tr>
            </tbody>
          </table>
        </Container>
      </Section>
    </Main>
  );
}
