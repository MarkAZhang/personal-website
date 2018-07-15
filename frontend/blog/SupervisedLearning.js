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
        A review for those who have studied supervised learning before.
      </div>
      <h2>Training Examples</h2>
      <p>
        In order to make use of a supervised machine learning model,
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
        Certain machine learning models are better suited to different types of problems.
        For example, linear regression is a basic model for regression problems,
        and logistic regression is (confusingly) a basic model for classification problems.
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
        Different learning models make different assumptions about the form of
        the hypothesis function. For example, linear regression restricts the hypothesis
        to functions of the form:
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
        The <b>cost function</b> <IF>J</IF> is the means by which the learning algorithm evaluates
        the performance of the hypothesis <IF>{'H_{\\theta}(x)'}</IF> for its current choice
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
        Gradient descent is an iterative process that seeks to minimize <IF>J</IF>.
        At each step, we adjust each
        parameter <IF>{'\\theta_i'}</IF> as follows:
      </p>
      <p>
        <F>
          {'\\theta_i \\Rightarrow \\theta_i - \\alpha\\frac{d}{d\\theta_i}J(\\theta)'}
        </F>
      </p>
      <p>
        Where <IF>{'\\frac{d}{d\\theta_i}J(\\theta)'}</IF> is the derivative of the entire
        cost function (an expression which includes all the parameters as well as all the
        training examples) with respect to the particular parameter <IF>{'\\theta_i'}</IF>.
      </p>
      <p>
        After the supervised learning model has been trained with gradient descent,
        we can evaluate the effectiveness of the resulting hypothesis function,
        and then use it to make predictions.
      </p>
      <h3>The Learning Rate Hyperparameter</h3>
      <p>
        In the above expression, <IF>{'\\alpha'}</IF> is the <b>learning rate</b>. It is an example
        of a <b>hyperparameter</b>, a &#39;higher-order&#39; parameter which controls how well and
        how quickly the learning algorithm can converge on good parameters <IF>{'\\theta_i'}</IF>.
      </p>
      <p>
        If <IF>{'\\alpha'}</IF> is too small,
        it can slow down the gradient descent process. Conversely, if <IF>{'\\alpha'}</IF> is
        too large, it can cause gradient descent to overshoot the minimum and diverge.
      </p>
      <h2>The Train-Test Split</h2>
      <p>
        It is best practice to partition your training examples into
        a <b>training set</b> and a <b>test set</b>. Andrew Ng recommands 70% training, 30% test.
      </p>
      <p>
        Train your model on the training set, then evaluate your model&#39;s accuracy with
        the test set, which your model has never seen before. This allows you to more
        accurately evaluate how well your model&#39;s hypothesis will perform on real-world data.
      </p>
      <p>
        If you must also tune hyperparameters for your model, you should partition off an
        additional <b>validation set</b>. Andrew Ng recommends
        60% training, 20% validation, 20% test.
      </p>
      <p>
        Train your model repeatedly on the test set using various hyperparameters, evaluate
        each hypothesis on the validation set to find the hyperparameters that produce
        the best hypothesis, then do a final evaluation of the best hypothesis on
        the test set to estimate performance on real-world data.
      </p>
      <h2>The Bias-Variance Tradeoff</h2>
      <p>
        Bias and variance are two sources of error that can cause supervised learning
        algorithms to perform poorly.
      </p>
      <p>
        <b>Bias</b> refers to assumptions that a learning model makes about the hypothesis
        <IF>H</IF>. For example, the linear
        regression model assumes that the <IF>H</IF> has a linear form.
      </p>
      <p>
        When a learning model makes overly simplifying assumptions about <IF>H</IF>,
        or alternatively, if the learning model is too simple to capture the
        complex relationship between <IF>{'x^{(i)}'}</IF> and  <IF>{'y^{(i)}'}</IF>, we
        say that the model has high bias.
      </p>
      <p>
        <b>Variance</b> refers to how sensitive a learning model is to random noise in
        the training set. If two roughly similar training sets cause a learning model
        to produce drastically different hypotheses, this model has high variance.
      </p>
      <p>
        The <b>bias-variance tradeoff</b> refers to the fact that learning algorithms
        that can more flexibly model complex functions (and thus have low bias)
        tend to have high variance and overfit their data.
      </p>
      <p>
        One approach to mitigating this tradeoff is to pick a model with
        high variance, and then collect sufficient data to prevent overfitting.
        However, there is still a tradeoff where the higher variance your
        model is, the more data you will need.
      </p>
      <h2>Common Supervised Learning Models</h2>
      <p>
        Widely used models include:
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
        a set of weaker models into a stronger one that performs much better.
      </p>
      <p>
        The top supervised learning models tend to perform on par with each other,
        and all of them do better with more data.
      </p>
      <div className={cx(cs.footer, cs.note)}>
        Made with <Icon glyph='heart' className={cs.heart} /> by Mark
      </div>
    </div>
  </MathJax.Context>
)

export default SupervisedLearning
