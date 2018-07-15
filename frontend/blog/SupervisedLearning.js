import MathJax from 'react-mathjax2'
import cx from 'classnames'

import Icon from '~/components/Icon'

import IF from './InlineFormula'
import F from './BlockFormula'
import cs from './styles.css'

const SupervisedLearning = () => (
  <MathJax.Context input='tex'>
    <div className={cs.post}>
      <div className={cs.title}>Supervised Learning</div>
      <div className={cs.note}>
        A quick review for those who have already studied supervised learning.
      </div>
      <h2>Training Examples</h2>
      <p>
        In order to apply a supervised machine learning algorithm,
        you will need a set of <b>pre-labeled training examples</b>.
      </p>
      <p>
        Each training example is a data sample that contains input variables
        (also known as <b>features</b>) as well the <b>target variable</b> you are trying to predict.
      </p>
      <p>
        Training example <IF inline>i</IF> is commonly denoted <IF>{'(x^{(i)}, y^{(i)})'}</IF>,
        where <IF>{'x^{(i)}'}</IF> is the feature vector and <IF>{'y^{(i)}'}</IF> is
        the target variable.
      </p>
      <h2>Classification and Regression Problems</h2>
      <p>
        When the target variable <IF>{'y^{(i)}'}</IF> is a continuous value
        (such as a real number), we call our learning problem a <b>regression problem</b>.
        When <IF>{'y^{(i)}'}</IF> is a discrete, unordered value such as a category or a yes/no
        answer, it is a <b>classification problem</b>.
      </p>
      <p>
        In binary classification problems, the target variable <IF>{'y^{(i)}'}</IF> is
        represented as a 1 or a 0.
        In multi-class classification problems, we represent <IF>{'y^{(i)}'}</IF> as
        a <b>one-hot encoded vector.</b> For example, for a 3-class
        problem, <IF>{'y^{(i)}'}</IF> would be one of:
      </p>
      <p>
        <F>
          {`
            \\begin{bmatrix}
              1 \\\\
              0 \\\\
              0
            \\end{bmatrix},
            \\begin{bmatrix}
              0 \\\\
              1 \\\\
              0
            \\end{bmatrix},
            \\begin{bmatrix}
              0 \\\\
              0 \\\\
              1
            \\end{bmatrix}
          `}
        </F>
      </p>
      <p>
        Certain machine learning algorithms are better suited to different types of problems.
        For example, linear regression is a basic algorithm for regression problems,
        and logistic regression is (confusingly) a basic algorithm for classification problems.
      </p>
      <h2>The Hypothesis Function</h2>
      <p>
        The <b>hypothesis function</b> <IF>H</IF> tries to capture the relationship
        between the features and the target variable.
      </p>
      <p>
        <F>{'H(x^{(i)}) \\approx y^{(i)}'}</F>
      </p>
      <p>
        Based on your choice of learning algorithm, the hypothesis function will take
        on different forms. For example, in linear regression, the hypothesis has
        the form,
      </p>
      <p>
        <F>
          {`H_{\\theta}(x)
            = \\theta^T \\cdot x
            = \\theta_0 + \\theta_1 * x_1 + \\theta_2 * x_2 + \\ldots +
              \\theta_n * x_n`
          }
        </F>
      </p>
      <p>
        Here, <IF>{'\\theta_i'}</IF> are the weights (or <b>parameters</b>) that the
        linear regression algorithm is trying to learn through your training data.
      </p>
      <p>
        Your learning algorithm typically initializes its hypothesis with
        random <IF>{'\\theta_i'}</IF> and iteratively improves on these
        parameters during the training process to come up with the best possible
        hypothesis.
      </p>
      <h2>The Cost Function</h2>
      <p>
        The <b>cost function</b> <IF>J</IF> is the means by which your learning algorithm evaluates
        the performance of <IF>{'H_{\\theta}(x)'}</IF> for its current choice
        of parameters <IF>{'\\theta_i'}</IF>.
      </p>
      <p>
        The cost function <IF>J</IF> usually depends on an <IF>error</IF> function
        that measures how well the current hypothesis predicts a
        given training example. For linear regression, the squared error function is typically used:
      </p>
      <p>
        <F>
          {'error(H_{\\theta}(x^{(i)}), y^{(i)}) = (H_{\\theta}(x^{(i)}) - y^{(i)})^2'}
        </F>
      </p>
      <p>
        The cost function <IF>J</IF> usually averages the <IF>error</IF> function
        applied over all training examples. For linear regression:
      </p>
      <p>
        <F>
          {'J(\\theta) = \\frac{1}{2m} \\sum_{i=1}^{m} error(H_{\\theta}(x^{(i)}), y^{(i)})'}
        </F>
      </p>
      <p>
        Note that <IF>J</IF> is a function on the parameters <IF>{'\\theta'}</IF>. It is measuring
        how well the current parameters are predicting the entire training set.
      </p>
      <p>
        While the details of the cost function will vary by learning algorithm,
        the goal of every supervised learning algorithm is to minimize the cost function to
        get the best possible hypothesis.
        The conventional way to do this is with a method called <b>gradient descent</b>.
      </p>
      <h2>Gradient Descent</h2>
      <p>
        Gradient descent is an iterative process. At each step, we adjust each
        parameter <IF>{'\\theta_i'}</IF> in the following way in order to decrease <IF>J</IF>:
      </p>
      <p>
        <F>
          {'\\theta_i \\Rightarrow \\theta_i - \\alpha\\frac{d}{d\\theta_i}J(\\theta_i)'}
        </F>
      </p>
      <p>
        After the supervised learning algorithm has been trained with the gradient descent,
        we can evaluate the resulting hypothesis function, and then use it to make predictions.
      </p>
      <h3>The Learning Rate Hyperparameter</h3>
      <p>
        In the above expression, <IF>{'\\alpha'}</IF> is the <b>learning rate</b>. It is an example
        of a <b>hyperparameter</b>, a &#39;higher-order&#39; parameter which controls how well and
        how quickly the learning algorithm can converge on good parameters <IF>{'\\theta_i'}</IF>.
      </p>
      <p>
        If <IF>{'\\alpha'}</IF> is too small,
        it can slow down the gradient descent process. If <IF>{'\\alpha'}</IF> is too large,
        it can cause gradient descent to overshoot the minimum and diverge.
      </p>
      <h2>Common Supervised Learning Algorithms</h2>
      <p>
        Widely used algorithms include:
        <ul>
          <li>Linear regression</li>
          <li>Logistic regression</li>
          <li>Support vector machines</li>
          <li>Neural networks</li>
          <li>Decision trees</li>
          <li>Naive Bayes</li>
        </ul>
      </p>
      <p>
        There are also <b>ensemble</b> methods such as bagging and boosting that combine
        a set of weaker hypotheses into a stronger hypothesis that performs much better.
      </p>
      <p>
        The top supervised learning algorithms tend to perform on par with each other,
        and all of them do better with more data.
      </p>
      <div className={cx(cs.footer, cs.note)}>
        Made with <Icon glyph='heart' className={cs.heart} /> by Mark
      </div>
    </div>
  </MathJax.Context>
)

export default SupervisedLearning
